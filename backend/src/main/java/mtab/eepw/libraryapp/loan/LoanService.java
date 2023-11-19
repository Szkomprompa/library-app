package mtab.eepw.libraryapp.loan;

import jakarta.transaction.Transactional;
import mtab.eepw.libraryapp.client.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class LoanService {
    private final LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    public List<Loan> getLoans() {
        return loanRepository.findAll();
    }

    public void addNewLoan(Loan loan) {
        Optional<Loan> loanOptional = loanRepository
                .findLoanById(loan.getId());
        if (loanOptional.isPresent()) {
            throw new IllegalStateException("loan already exists");
        }
        loanRepository.save(loan);
    }

    public void deleteLoan(Long loanId) {
        boolean exists = loanRepository.existsById(loanId);
        if (!exists) {
            throw new IllegalStateException("loan with id " + loanId + " doesn't exists");
        }
        loanRepository.deleteById(loanId);
    }

    @Transactional
    public void updateLoan(Long loanId,
                             Client client,
                             LocalDate loanDate,
                             LocalDate finalDate,
                             LocalDate returnDate,
                             String book) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new IllegalStateException("client with id " + loanId + " doesn't exists"));

        if (book != null &&
                !book.isEmpty() &&
                !Objects.equals(loan.getBook(), book)) {
            loan.setBook(book);
        }

        if (loanDate != null &&
                !loanDate.isAfter(LocalDate.now()) &&
                !Objects.equals(loan.getLoanDate(), loanDate)) {
            loan.setLoanDate(loanDate);
        }

        if (finalDate != null &&
                !finalDate.isAfter(LocalDate.now()) &&
                !Objects.equals(loan.getFinalDate(), finalDate)) {
            loan.setFinalDate(finalDate);
        }

        if (returnDate != null &&
                !returnDate.isAfter(LocalDate.now()) &&
                !Objects.equals(loan.getReturnDate(), returnDate)) {
            loan.setReturnDate(returnDate);
        }

        if (client != null) {
            loan.setClient(client);
        }
        loanRepository.save(loan);
    }
}
