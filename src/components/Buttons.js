import Button from "./Button";

function Buttons() {
  return (
    <div className="buttons-container">
      <Button data-num="1">1</Button>
      <Button data-num="2">2</Button>
      <Button data-num="3">3</Button>
      <Button data-num="C">C</Button>
      <Button data-num="4">4</Button>
      <Button data-num="5">5</Button>
      <Button data-num="6">6</Button>
      <Button data-num="+">+</Button>
      <Button data-num="7">7</Button>
      <Button data-num="8">8</Button>
      <Button data-num="9">9</Button>
      <Button data-num="-">-</Button>
      <Button data-num=".">.</Button>
      <Button data-num="0">0</Button>
      <Button data-num="*">*</Button>
      <Button data-num="/">/</Button>
      <div className="eq">
        <Button data-num="=" className="eq" bgColor="orange">
          =
        </Button>
      </div>
      <Button data-num="AC">AC</Button>
    </div>
  );
}

export default Buttons;
