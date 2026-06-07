import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'High-Efficiency 550W Solar Panel',
    description: 'Monocrystalline solar panel with 21.3% efficiency, perfect for Israeli sun conditions.',
    price: 850,
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=60',
    specs: {
      'Power Output': '550W',
      'Efficiency': '21.3%',
      'Warranty': '25 Years'
    }
  },
  {
    id: 'i1',
    name: 'Smart Hybrid Inverter 5kW',
    description: 'Advanced hybrid inverter compatible with battery storage and smart home integration.',
    price: 4200,
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60',
    specs: {
      'Max Power': '5kW',
      'Efficiency': '98.4%',
      'Type': 'Hybrid'
    }
  },
  {
    id: 'b1',
    name: 'Lithium Battery Storage 10kWh',
    description: 'High-capacity battery storage for energy independence during night and outages.',
    price: 12500,
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1548333341-97d4160eeacb?w=800&auto=format&fit=crop&q=60',
    specs: {
      'Capacity': '10kWh',
      'Cycle Life': '6000 cycles',
      'Voltage': '48V'
    }
  },
  {
    id: 'c1',
    name: 'Professional Panel Cleaning Kit',
    description: 'Complete cleaning kit including telescopic pole and specialized non-abrasive brush.',
    price: 350,
    category: 'cleaning',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 's1',
    name: 'Annual Maintenance Service',
    description: 'Comprehensive annual inspection and maintenance for residential solar systems.',
    price: 600,
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1581094751196-130fef21b31c?w=800&auto=format&fit=crop&q=60',
    isService: true
  }
];
