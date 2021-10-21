import { Tea } from './tea.interface';

export class AllTeas {
  greenTea: Tea = {
    name: 'green tea',
    color: 'green',
    teaAmount: 5,
    waterAmount: 250,
    temperature: 70,
    brewTime: 1
  };
  oolong: Tea = {
    name: 'oolong tea',
    color: 'yellow',
    teaAmount: 5,
    waterAmount: 250,
    temperature: 90,
    brewTime: 1
  };
  red: Tea = {
    name: 'red tea',
    color: 'red',
    teaAmount: 5,
    waterAmount: 250,
    temperature: 90,
    brewTime: 1.5
  };
  puer: Tea = {
    name: 'puer tea',
    color: 'purple',
    teaAmount: 5,
    waterAmount: 250,
    temperature: 100,
    brewTime: 1.5
  };
  herbal: Tea = {
    name: 'herbal tea',
    color: 'pink',
    teaAmount: 5,
    waterAmount: 250,
    temperature: 90,
    brewTime: 2
  };
}
