package mtab.eepw.libraryapp.book;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Setter
@Getter
public class Book {
    @Id
    private Long id;
    private String name;
    private String author;
}
