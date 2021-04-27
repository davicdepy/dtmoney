import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>G$ 25.000.000</strong>
            </div>
            <div>
                <header>
                    <p>Salidas</p>
                    <img src={outcomeImg} alt="Salidas"/>
                </header>
                <strong>G$ 850.000</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong> G$ 24.400.000</strong>
            </div>
        </Container>
    )
}