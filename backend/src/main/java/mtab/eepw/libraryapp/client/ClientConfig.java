package mtab.eepw.libraryapp.client;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ClientConfig {

    @Bean
    CommandLineRunner commandLineRunner(ClientRepository repository) {
        return args -> {
            Client jan = new Client(
                    "Jan",
                    "Nowak",
                    0.0,
                    "jannowak@gmail.com"
            );
            Client robert = new Client(
                    "Robert",
                    "Lewandowski",
                    0.0,
                    "rlew@gmail.com"
            );

            repository.saveAll(
                    List.of(jan, robert)
            );
        };
    }
}
