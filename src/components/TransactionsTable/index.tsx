import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Fecha</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desarrollo de website</td>
                        <td className="deposit">G$ 5.000.000</td>
                        <td>Venta</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburguesa</td>
                        <td className="withdraw">- G$ 25.000</td>
                        <td>Alimentación</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Alquiler del Departamento</td>
                        <td className="withdraw">- G$ 3.500.000</td>
                        <td>Vivienda</td>
                        <td>27/03/2021</td>
                    </tr>
                    <tr>
                        <td>Computadora</td>
                        <td className="deposit">G$ 8.000.000</td>
                        <td>Venta</td>
                        <td>15/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}