import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Typewriter
      // options={{
      //   strings: ["People", "And", "Opinions.", "PEPNOPS"],
      //   autoStart: true,
      //   loop: true,
      //   cursorClassName: classname,
      //   deleteSpeed: 70,
      // }}
      options={{
        loop: true,
      }}
      onInit={(writer) => {
        writer
          .pauseFor(2500)
          .typeString("Frontend Web Developer.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Freelancer.")
          .pauseFor(1000)
          .deleteAll()
          // .deleteChars(10)
          .typeString("Chemical Engineer.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Cool guy 😎")
          .pauseFor(2500)
          .start();
      }}
    />
  );
};

export default TypeEffect;
