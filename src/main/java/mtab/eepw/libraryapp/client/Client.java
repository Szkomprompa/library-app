package mtab.eepw.libraryapp.client;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mtab.eepw.libraryapp.loan.Loan;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Client {
    @Id
    @SequenceGenerator(
            name = "client_sequence",
            sequenceName = "client_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_sequence"
    )
    private Long id;
    private String name;
    private String surname;
    private Double charge;
    private String email;
    @OneToMany(fetch = FetchType.EAGER)
    private Set<Loan> loan = new HashSet<>();

    public Client(String name,
                  String surname,
                  Double charge,
                  String email) {
        this.name = name;
        this.surname = surname;
        this.charge = charge;
        this.email = email;
    }

    public Client(Long id,
                  String name,
                  String surname,
                  Double charge,
                  String email) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.charge = charge;
        this.email = email;
    }

    @Override
    public String toString() {
        return "Stydent{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", charge=" + charge +
                ", email='" + email + '\'' +
                '}';
    }
}
