import React, {useState} from 'react';

export default function ContaClicks() {
    const [contador, setContador] = useState(0);
    return(
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}>Clicar</button>
        </div>
    )
}
