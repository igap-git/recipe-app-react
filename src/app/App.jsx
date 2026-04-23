import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import React from 'react';
import DropDownMenu from '../components/DropDownMenu/DropDownMenu';

export default function App() {
  return (
    <>
      <Button variant="primary">Save</Button>
      <Card
        SourceImage={
          'https://img.freepik.com/darmowe-zdjecie/pizza-pizza-wypelniona-pomidorami-salami-i-oliwkami_140725-1200.jpg?semt=ais_hybrid&w=740&q=80'
        }
        title="Pizza a'la petrola"
      ></Card>
      <DropDownMenu
        items={[
          { label: 'Profiler', value: 'profiler' },
          { label: 'Settings', value: 'settings' },
          { label: 'Questions', value: 'questions' },
          { label: 'Others', value: 'others' },
        ]}
      >
        Menu
      </DropDownMenu>
    </>
  );
}
