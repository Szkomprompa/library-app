package mtab.eepw.libraryapp.client;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.Collections;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class ClientFactory {
    public static Client makeClient() {
        return Client
                .builder()
                .id(1L)
                .name("Jan")
                .surname("Nowak")
                .email("jannowak@gmail.com")
                .charge(0.0)
                .loan(Collections.emptySet())
                .build();
    }
}
