package mtab.eepw.libraryapp.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/client")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> hello() {
        return clientService.getClients();
    }

    @PostMapping
    public void registerNewClient(@RequestBody Client client) {
        clientService.addNewClient(client);
    }

    @DeleteMapping(path = "{clientId}")
    public void deleteClient(
            @PathVariable("clientId") Long clientId) {
        clientService.deleteClient(clientId);
    }

    @PutMapping(path = "{clientId}")
    public void updateClient(
            @PathVariable("clientId") Long clientId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String surname,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) Double charge) {
        clientService.updateClient(clientId, name, surname, email, charge);
    }
}
