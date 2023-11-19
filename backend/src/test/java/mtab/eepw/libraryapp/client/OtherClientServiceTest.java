package mtab.eepw.libraryapp.client;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileReader;
import java.io.IOException;

import static mtab.eepw.libraryapp.client.ClientFactory.makeClient;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class OtherClientServiceTest {
    @Mock
    private ClientRepository clientRepository;
    @InjectMocks
    private ClientService clientService;

    private static final Logger logger = LoggerFactory.getLogger(OtherClientServiceTest.class);
    JSONParser parser = new JSONParser();

    @Test
    public void shouldCreateNewClientFromJsonFileWhenGivenClientHaveAllRequiredData() {
        //given
        Client client = makeClient();
        try {
            Object obj = parser.parse(new FileReader("src\\test\\java\\mtab\\eepw\\libraryapp\\client\\clientData.json"));
            logger.info("Trying to read JSON file");

            if (obj instanceof JSONObject) {
                JSONObject jsonObject = (JSONObject) obj;
                JSONArray jsonArray = (JSONArray) jsonObject.get("clients");
                for (Object o : jsonArray) {
                    JSONObject jsonClient = (JSONObject) o;
                    logger.info("Object readed");
                    client = client
                            .toBuilder()
                            .name((String) jsonClient.get("name"))
                            .surname((String) jsonClient.get("surname"))
                            .email((String) jsonClient.get("email"))
                            .build();
                }
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
        Client dbClient = client.toBuilder()
                .id(1L).build();
        when(clientRepository.save(client)).thenReturn(dbClient);

        //when
        Client createdClient = clientService.addNewClient(client);

        //then
        logger.info("Asserting client");
        verify(clientRepository, times(1)).save(client);
        assertThat(createdClient)
                .usingRecursiveComparison()
                .isEqualTo(dbClient);
    }
}
