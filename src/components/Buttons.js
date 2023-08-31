import Button from "./Button";

function Buttons() {
  return (
    <div className="buttons-container">
      <Button name="1">1</Button>
      <Button name="2">2</Button>
      <Button name="3">3</Button>
      <Button name="+">+</Button>
      <Button name="4">4</Button>
      <Button name="5">5</Button>
      <Button name="6">6</Button>
      <Button name="-">-</Button>
      <Button name="7">7</Button>
      <Button name="8">8</Button>
      <Button name="9">9</Button>
      <Button name="*">*</Button>
      <Button name=".">.</Button>
      <Button name="0">0</Button>
      <Button name="AC">AC</Button>
      <Button name="/">/</Button>
      <div className="eq">
        <Button name="=" className="eq" bgColor="orange">
          =
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
