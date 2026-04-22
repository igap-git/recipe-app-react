import Button from "../components/Button/Button"
import Card from "../components/Card/Card"
import React from "react";

export default function App(){
    return(
        <>
        <Button variant="primary">Save</Button>
        <Card SourceImage={'https://img.freepik.com/darmowe-zdjecie/pizza-pizza-wypelniona-pomidorami-salami-i-oliwkami_140725-1200.jpg?semt=ais_hybrid&w=740&q=80'} title="Pizza a'la petrola"></Card>
        </>
    );
}