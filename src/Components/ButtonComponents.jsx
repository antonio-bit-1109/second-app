const ButtonComponents = (props) => {
    return (
        <button
            style={{
                marginBlock: props.marginBlock,
                padding: props.padding,
                borderRadius: props.borderRadius,
                border: props.border,
                margin: props.margin,
            }}
        >
            {props.content} + {props.content1}
        </button>
    );
};

export default ButtonComponents;
