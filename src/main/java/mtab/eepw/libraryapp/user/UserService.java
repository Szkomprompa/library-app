package mtab.eepw.libraryapp.user;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public List<User> getUsers() {
        return List.of(
                new User(
                        1L,
                        "Jan",
                        "Nowak",
                        0.0,
                        "jannowak@gmail.com"
                )
        );
    }
}
