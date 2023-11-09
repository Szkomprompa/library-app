package mtab.eepw.libraryapp.client;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ClientService {
    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    public Client getClientById(Long clientId) {
        return clientRepository.getById(clientId);
    }

    public Client getClientByEmail(String email) {
        return clientRepository
                .findClientByEmail(email)
                .orElseThrow(() -> new ClientNotFoundException("Client has not been found!"));
    }

    public Client addNewClient(Client client) {
        Optional<Client> clientOptional = clientRepository
                .findClientByEmail(client.getEmail());
        if (clientOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        clientRepository.save(client);
        return client;
    }

    public void deleteClient(Long clientId) {
        boolean exists = clientRepository.existsById(clientId);
        if (!exists) {
            throw new IllegalStateException("client with id " + clientId + " doesn't exists");
        }
        clientRepository.deleteById(clientId);
    }

    @Transactional
    public Client updateClient(Long clientId,
                             String name,
                             String surname,
                             String email,
                             Double charge) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(() -> new IllegalStateException("client with id " + clientId + " doesn't exists"));

        if (name != null &&
                !name.isEmpty() &&
                !Objects.equals(client.getName(), name)) {
            client.setName(name);
        }

        if (surname != null &&
                !surname.isEmpty() &&
                !Objects.equals(client.getSurname(), surname)) {
            client.setSurname(surname);
        }

        if (email != null &&
                !email.isEmpty() &&
                !Objects.equals(client.getEmail(), email)) {
            client.setEmail(email);
        }

        if (charge != null &&
                !Objects.equals(client.getCharge(), charge)) {
            client.setCharge(charge);
        }
        clientRepository.save(client);
        return client;
    }
}
