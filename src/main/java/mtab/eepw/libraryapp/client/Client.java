package mtab.eepw.libraryapp.client;

import jakarta.persistence.*;

@Entity
@Table
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

    public Client() {
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

    public Client(String name,
                  String surname,
                  Double charge,
                  String email) {
        this.name = name;
        this.surname = surname;
        this.charge = charge;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Double getCharge() {
        return charge;
    }

    public void setCharge(Double charge) {
        this.charge = charge;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
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
