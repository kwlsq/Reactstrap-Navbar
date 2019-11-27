import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Kartu = (props) => {
  return (
    <div>
      <Card body outline color="secondary">
      <CardTitle>{props.contoh}</CardTitle>
      <CardText>{props.contoh2}</CardText>
      <Button>{props.contoh3}</Button>
      </Card>
    </div>
  );
};

export default Kartu;