export default function Carousel(props){
    // Widths are integers representing percentages
    const edge_width = props.edge_width;
    const content_width = 100 - edge_width;
    console.log(edge_width);

    return(
            <>
            <div style={{
                backgroundColor: "black",
                width: edge_width + "%",
            }}/>
            {props.children}
            <div style={{
                backgroundColor: "black",
                width: edge_width + "%",
            }}/>
            </>
        );
}

export function ActiveItem(props) {
    return (props.children);
}
export function InactiveItem(props) {
    return (props.children);
}