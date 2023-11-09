package mtab.eepw.libraryapp.loan;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import mtab.eepw.libraryapp.book.Book;
import mtab.eepw.libraryapp.client.Client;

import java.time.LocalDate;

@Entity
@Table
@Getter
@Setter
public class Loan {
    @Id
    @SequenceGenerator(
            name = "loan_sequence",
            sequenceName = "loan_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "loan_sequence"
    )
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Client client;
    private LocalDate loanDate;
    private LocalDate finalDate;
    private LocalDate returnDate;
                                    //@OneToMany(fetch = FetchType.LAZY)
    private String book;            //Book book;
}
