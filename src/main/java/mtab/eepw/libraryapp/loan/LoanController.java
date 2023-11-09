package mtab.eepw.libraryapp.loan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/loan")
public class LoanController {

    private final LoanService loanService;
    @Autowired
    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }
}
