package mtab.eepw.libraryapp;

import mtab.eepw.libraryapp.user.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class LibraryAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryAppApplication.class, args);
	}

	@GetMapping
	public List<User> hello() {
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
