import "./Modal.css";

const Modal = (props: {
  open: boolean;
  className?: string;
  children: any;
  close: any;
}) => {
  const attachedClasses = props.open
    ? ["open", props.className]
    : ["close", props.className];

  const backdropClasses = props.open ? ["backdrop_open"] : ["backdrop_close"];

  return (
    <div className={`modal_container ${backdropClasses.join(" ")}`}>
      <div className={`modal ${attachedClasses.join(" ")}`}>
        <span className="close-modal" onClick={props.close}>
          CLOSE
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
