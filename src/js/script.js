    const formElement = document.getElementById('form');

    formElement.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        const age = Number(document.getElementById('age').value);
        const weight = Number(document.getElementById('weight').value);
        var height = document.getElementById('height').value;
        height = height[0] + '.' + height[1] + height[2];
        Number(height);
        const gender = getSelectedValue('gender');
        const activityLevel = getSelectedValue('activity_level');

        const imc = weight / (height ** 2);
        
        const tmb = (
            gender === 'female'
        
            ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) 

            : (66 + (13.7 * weight) + (5 * height) - (6.8  * age))
        );

        const maintenance = Math.round(tmb * Number(activityLevel));
        const loseWeight = maintenance - 450;
        const gainWeight = maintenance + 450;

        const layout = `<h2>Aqui está o resultado:</h2>

        <div class="result-content">
            <ul>
                <li>Seu IMC <i>(Índice de massa corporal)</i> é: <strong>${imc.toFixed(2)}</strong></li>

                <li>
                    <details>
                        <summary>Sobre IMC (clique aqui)</summary>
                        <p>Entre <b>17 e 18.4</b>: <strong style="color:#fddb33">Abaixo do peso</strong></p>
                        <p>Entre 18.5 e 24.9: <strong style="color:#97f361">Normal</strong></p>
                        <p>Entre 25 e 29.9: <strong style="color:#fea753">Acima do peso</strong></p>
                        <p>Acima de 30: <strong style="color:#ff7372">Obesidade</strong></p>
                        <hr>
                    </details>
                </li>

                <li>Seu metabolismo basal é de <strong>${Math.round(tmb)} calorias</strong>.</li>

                <li>Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.</li>

                <li>Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.</li>

                <li>Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.</li>
            </ul>
        </div>`;
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = layout;
    }

  

    function getSelectedValue(id) {
        const select = document.getElementById(id);
        const value = select.options[select.selectedIndex].value;
        return value;
    }

    