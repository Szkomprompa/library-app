package mtab.eepw.libraryapp.client;

import org.assertj.core.api.ThrowableAssert.ThrowingCallable;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static mtab.eepw.libraryapp.client.ClientFactory.makeClient;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ClientServiceTest {
    @Mock
    private ClientRepository clientRepository;
    @InjectMocks
    private ClientService clientService;

    @Test
    void shouldReturnTheClientWhenClientWithThatIdIsInDB() {
        //given
        Client client = makeClient();
        Long id = client.getId();

        when(clientRepository.findById(id)).thenReturn(Optional.of(client));

        //when
        Client fetchedClient = clientService.getClientById(id);

        //then
        verify(clientRepository, times(1)).findById(id);
        assertThat(fetchedClient)
                .usingRecursiveComparison()
                .isEqualTo(client);
    }

    @Test
    void shouldThrowExceptionWhenClientWithThatIdIsNotInDB() {
        //given
        Long notExistingClientId = 1L;
        when(clientRepository.findById(notExistingClientId)).thenReturn(Optional.empty());

        //when
        ThrowingCallable getClientByIdExecutable = () -> clientService.getClientById(notExistingClientId);

        //then
        assertThatThrownBy(getClientByIdExecutable)
                .isInstanceOf(ClientNotFoundException.class)
                .hasMessageContaining("Client has not been found");
        verify(clientRepository, times(1)).findById(notExistingClientId);
    }

    @Test
    void shouldThrowExceptionWhenProvidedIdIsNull() {
        //given
        Long nullId = null;
        when(clientRepository.findById(nullId)).thenThrow(IllegalArgumentException.class);

        //when
        ThrowingCallable getClientByIdExecutable = () -> clientService.getClientById(nullId);

        //then
        assertThatThrownBy(getClientByIdExecutable)
                .isInstanceOf(IllegalArgumentException.class);
        verify(clientRepository, times(1)).findById(nullId);
    }

    @Test
    void shouldReturnAllClientsWhenGetAllClientsInvoked() {
        //given
        Client client1 = makeClient();
        Client client2 = makeClient().toBuilder()
                .id(2L)
                .name("Kamil")
                .email("kstoch@example.com")
                .surname("Stoch")
                .build();

        when(clientRepository.findAll()).thenReturn(List.of(client1, client2));

        //when
        Collection<Client> allClients = clientService.getClients();

        //then
        verify(clientRepository, times(1)).findAll();
        assertThat(allClients)
                .usingRecursiveComparison()
                .isEqualTo(List.of(client1, client2));
    }

    @Test
    void shouldReturnEmptyCollectionWhenNoDataIsPresentInDB() {
        //given
        when(clientRepository.findAll()).thenReturn(Collections.emptyList());

        //when
        Collection<Client> allClients = clientService.getClients();

        //then
        verify(clientRepository, times(1)).findAll();
        assertThat(allClients)
                .usingRecursiveComparison()
                .isEqualTo(Collections.emptyList());
    }

    @Test
    void shouldReturnClientWhenClientWithProvidedEmailIsInDB() {
        //given
        Client client = makeClient();
        String email = client.getEmail();
        when(clientRepository.findClientByEmail(email)).thenReturn(Optional.of(client));

        //when
        Client fetchedClient = clientService.getClientByEmail(email);

        //then
        verify(clientRepository, times(1)).findClientByEmail(email);
        assertThat(fetchedClient)
                .usingRecursiveComparison()
                .isEqualTo(client);
    }

    @Test
    void shouldThrowExceptionWhenProvidedEmailIsNotInDB() {
        //given
        String notExistingEmail = "notexisting@gmail.com";
        when(clientRepository.findClientByEmail(notExistingEmail)).thenReturn(Optional.empty());

        //when
        ThrowingCallable getClientByEmailExecutable = () -> clientService.getClientByEmail(notExistingEmail);

        //then
        assertThatThrownBy(getClientByEmailExecutable)
                .isInstanceOf(ClientNotFoundException.class)
                .hasMessageContaining("Client has not been found!");
        verify(clientRepository, times(1)).findClientByEmail(notExistingEmail);
    }

    @Test
    void shouldThrowExceptionWhenProvidedEmailIsNull() {
        //given
        String nullEmail = null;
        when(clientRepository.findClientByEmail(nullEmail)).thenThrow(IllegalArgumentException.class);

        //when
        ThrowingCallable getClientByEmailExecutable = () -> clientService.getClientByEmail(nullEmail);

        //then
        assertThatThrownBy(getClientByEmailExecutable)
                .isInstanceOf(IllegalArgumentException.class);
        verify(clientRepository, times(1)).findClientByEmail(nullEmail);
    }

    @Test
    void shouldCreateNewClientWhenGivenClientHasAllRequiredData() {
        //given
        Client client = makeClient().toBuilder()
                .id(null).build();
        Client dbClient = client.toBuilder()
                .id(1L).build();
        when(clientRepository.save(client)).thenReturn(dbClient);

        //when
        Client createdClient = clientService.addNewClient(client);

        //then
        verify(clientRepository, times(1)).save(client);
        assertThat(createdClient)
                .usingRecursiveComparison()
                .isEqualTo(dbClient);
    }

    @Test
    void shouldThrowExceptionWhenGivenClientIsNull() {
        //given
        Client nullClient = null;
        when(clientRepository.save(nullClient)).thenThrow(IllegalArgumentException.class);

        //when
        ThrowingCallable createClientExecutable = () -> clientService.addNewClient(nullClient);

        //then
        assertThatThrownBy(createClientExecutable)
                .isInstanceOf(IllegalArgumentException.class);
        verify(clientRepository, times(1)).save(nullClient);
    }

    @Test
    void shouldUpdateClientDataWhenGivenClientAlreadyExists() {
        //given
        Client client = makeClient();
        Long clientId = client.getId();
        Client toUpdate = client.toBuilder()
                .name("Kamil")
                .email("kstoch@gmail.com")
                .surname("Stoch")
                .charge(0.0)
                .build();
        when(clientRepository.existsById(clientId)).thenReturn(true);
        when(clientRepository.save(toUpdate)).thenReturn(toUpdate);

        //when
        Client updatedClient = clientService.updateClient(toUpdate.getId(),
                toUpdate.getName(), toUpdate.getSurname(), toUpdate.getEmail(), toUpdate.getCharge());

        //then
        verify(clientRepository, times(1)).existsById(toUpdate.getId());
        verify(clientRepository, times(1)).save(toUpdate);
        assertThat(updatedClient)
                .usingRecursiveComparison()
                .isEqualTo(toUpdate);
    }

    @Test
    void shouldThrowExceptionOnUpdateWhenGivenClientDoesNotExist() {
        //given
        Client notExistingClient = makeClient();

        when(clientRepository.existsById(notExistingClient.getId())).thenReturn(false);

        //when
        ThrowingCallable updateClientExecutable = () -> clientService.updateClient(notExistingClient.getId(),
                notExistingClient.getName(),
                notExistingClient.getSurname(),
                notExistingClient.getEmail(),
                notExistingClient.getCharge());

        //then
        assertThatThrownBy(updateClientExecutable)
                .isInstanceOf(ClientNotFoundException.class)
                .hasMessageContaining("Client has not been found!");
        verify(clientRepository, times(1)).existsById(notExistingClient.getId());
        verify(clientRepository, times(0)).save(notExistingClient);
    }

    @Test
    void shouldThrowExceptionOnUpdateWhenGivenClientIsNull() {
        //given
        Client nullClient = null;

        //when
        ThrowingCallable updateClientExecutable = () -> clientService.updateClient(nullClient.getId(),
                nullClient.getName(),
                nullClient.getSurname(),
                nullClient.getEmail(),
                nullClient.getCharge());

        //then
        assertThatThrownBy(updateClientExecutable)
                .isInstanceOf(IllegalArgumentException.class);
        verify(clientRepository, times(0)).existsById(any());
        verify(clientRepository, times(0)).save(nullClient);
    }

    @Test
    void shouldDeleteClientWhenClientWithGivenIdExists() {
        //given
        Client client = makeClient();
        Long id = client.getId();
        when(clientRepository.findById(id)).thenReturn(Optional.of(client));

        //when
        clientService.deleteClient(id);

        //then
        verify(clientRepository, times(1)).findById(id);
        verify(clientRepository, times(1)).delete(client);
    }

    @Test
    void shouldThrowExceptionWhenTryingToDeleteNotExistingClient() {
        //given
        Long id = 1L;
        when(clientRepository.findById(id)).thenReturn(Optional.empty());

        //when
        ThrowingCallable deleteClientExecutable = () -> clientService.deleteClient(id);

        //then
        assertThatThrownBy(deleteClientExecutable)
                .isInstanceOf(ClientNotFoundException.class)
                .hasMessageContaining("Client has not been found");
        verify(clientRepository, times(1)).findById(id);
    }

    @Test
    void shouldThrowExceptionWhenGivenIdToDeleteIsNull() {
        //given
        Long id = null;
        when(clientRepository.findById(id)).thenThrow(IllegalArgumentException.class);

        //when
        ThrowingCallable deleteClientExecutable = () -> clientService.deleteClient(id);

        //then
        assertThatThrownBy(deleteClientExecutable)
                .isInstanceOf(IllegalArgumentException.class);
    }
}
