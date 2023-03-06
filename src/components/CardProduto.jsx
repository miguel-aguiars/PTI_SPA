import './CardProduto.css'


export default function CardProduto(props) {

    return (
        <div className='CardProduto'>
            <img src={props.produto.image} alt={props.produto.description} />
            <h2>{props.produto.name}</h2>
            <span>{props.produto.price}</span>
            <button type="button" class="cart-button">+</button>
        </div>

    )

}