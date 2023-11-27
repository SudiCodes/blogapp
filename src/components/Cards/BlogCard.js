import Card from "react-bootstrap/Card";

const BlogCard = (props) => {
  const formattedDate = new Date(props.created_at).toLocaleDateString();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`${props.written_by},${props.created_at}`}
        </Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
