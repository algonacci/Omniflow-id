import { Link } from 'react-router-dom';
import { 
  Users, BoxesIcon, TrendingUp, Calculator, Store, UserCheck, HeartHandshake,
  Briefcase, Megaphone, GraduationCap, CreditCard, Package, Brain, Settings,
  Factory, Truck, ShoppingCart
} from 'lucide-react';

const modules = [
  { icon: Users, name: 'HRIS', description: 'Complete human resource management system', url: '/HRIS' },
  { icon: BoxesIcon, name: 'Stock Management', description: 'Efficient inventory tracking and control', url: '/Stock-Management' },
  { icon: TrendingUp, name: 'Sales Management', description: 'Streamline your sales operations', url: '/Sales-Management' },
  { icon: Calculator, name: 'Accounting', description: 'Comprehensive financial management', url: '/Accounting' },
  { icon: Store, name: 'PoS', description: 'Modern point of sale system', url: '/PoS' },
  { icon: UserCheck, name: 'Customers', description: 'Customer relationship management', url: '/Customers' },
  { icon: HeartHandshake, name: 'CRM', description: 'Build stronger customer relationships', url: '/CRM' },
  { icon: Briefcase, name: 'Project Management', description: 'Efficient project tracking and delivery', url: '/Project-Management' },
  { icon: Megaphone, name: 'Marketing', description: 'Integrated marketing solutions', url: '/Marketing' },
  { icon: GraduationCap, name: 'LMS', description: 'Learning management system', url: '/LMS' },
  { icon: CreditCard, name: 'Payment Gateway', description: 'Secure payment processing', url: '/Payment-Gateway' },
  { icon: Package, name: 'Inventory', description: 'Advanced inventory management', url: '/Inventory' },
  { icon: Brain, name: 'AI', description: 'Intelligent business automation', url: '/AI' },
  { icon: Settings, name: 'Administration', description: 'Centralized system administration', url: '/Administration' },
  { icon: Factory, name: 'Manufacturing', description: 'Manufacturing process management', url: '/Manufacturing' },
  { icon: Truck, name: 'Supply Chain', description: 'End-to-end supply chain visibility', url: '/Supply-Chain' },
  { icon: ShoppingCart, name: 'Procurement', description: 'Streamlined procurement process', url: '/Procurement' }
];

export default function Modules() {
  return (
    <section id="modules" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link 
                key={module.name} 
                to={`/modules${module.url}`} 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{module.name}</h3>
                <p className="text-gray-600">{module.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
