package mtab.eepw.libraryapp.loan;

import mtab.eepw.libraryapp.client.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {
    @Query("SELECT l FROM Loan l WHERE l.id = ?1")
    Optional<Loan> findLoanById(Long id);
}
