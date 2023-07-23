import Card from "../UI/Card";

const Concept = ({ title, image, description }) => {
  return (
    <Card className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  );
};

export default Concept;
