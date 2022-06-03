import { Container } from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  imageUrl: string;
  category: string;
}

interface ProductProps {
  product: Product;
  addToCart: (item: Product) => void;
  edit: (item: Product) => void;
  remove: (item: Product) => void;
}

const Product = ({
  product,
  addToCart,
  edit,
  remove,
}: ProductProps): JSX.Element => {
  return (
    <Container>
      <section>
        <div>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <p>{product.name}</p>
        <p>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CAD',
          }).format(product.promoPrice ? product.promoPrice : product.price)}
        </p>
        <p>{product.category}</p>
      </section>
      <section>
        <div>
          {addToCart ? (
            <button type="button" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          ) : (
            <>
              <button type="button" onClick={() => edit(product)}>
                Edit
              </button>
              <button type="button" onClick={() => remove(product)}>
                Delete
              </button>
            </>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Product;
