// Importing button component for our buy button on each card
import Button from "./Button";

export default function ProductCard({ image_url, name, price, description }) {
  return (
    // Corrected coloumn sizes for better responsive design
    // both medium (tablet) and large (desktop) screens have a 2 column layout
    // Large laptops (xl) have a 3 column layout
    <div className="col s12 m6 xl4 product-card card z-depth-3">
      <img src={image_url} alt={name} className="product-card__image" />
      <div className="product-card__name">{name}</div>
      <div className="product-card__price">${price}</div>
      <div className="product-card__description">{description}</div>
      <Button type="button" styling="product-card__button" text="Buy Now" />
    </div>
  );
}
