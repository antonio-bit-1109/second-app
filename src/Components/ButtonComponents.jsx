const ButtonComponents = (props) => {
    return (
        <button
            style={{
                marginBlock: props.marginBlock,
                padding: props.padding,
                borderRadius: props.borderRadius,
                border: props.border,
            }}
        >
            {props.content} + {props.content1}
        </button>
    );
};

export default ButtonComponents;
