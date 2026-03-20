import {
	ArrowRight,
	Briefcase,
	Calculator,
	CreditCard,
	GraduationCap,
	HeartHandshake,
	Link as LinkIcon,
	Megaphone,
	ShoppingCart,
	Store,
	Users,
} from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const modules = [
	{
		key: "hris",
		icon: Users,
		color: "from-blue-500 to-blue-600",
	},
	{
		key: "ecommerce",
		icon: ShoppingCart,
		color: "from-emerald-500 to-emerald-600",
	},
	{
		key: "xrm",
		icon: HeartHandshake,
		color: "from-purple-500 to-purple-600",
	},
	{
		key: "accounting",
		icon: Calculator,
		color: "from-orange-500 to-orange-600",
	},
	{
		key: "urls",
		icon: LinkIcon,
		color: "from-pink-500 to-pink-600",
	},
	{
		key: "bizzcard",
		icon: Briefcase,
		color: "from-indigo-500 to-indigo-600",
	},
	{
		key: "pos",
		icon: Store,
		color: "from-red-500 to-red-600",
	},
	{
		key: "lms",
		icon: GraduationCap,
		color: "from-cyan-500 to-cyan-600",
	},
	{
		key: "telemarketing",
		icon: Megaphone,
		color: "from-yellow-500 to-yellow-600",
	},
	{
		key: "payment-gateway",
		icon: CreditCard,
		color: "from-teal-500 to-teal-600",
	},
];

export default function ModulesPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("modulesPage.title")}
				description={t("modulesPage.subtitle")}
				keywords="ERP modules, business software modules, HRIS, accounting, POS, CRM, LMS, Omniflow modules"
				type="website"
			/>

			<section className="section-hero pt-32">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8 animate-fade-in-left">
							<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
								{t("modulesPage.badge")}
							</div>

							<h1 className="text-enterprise-primary">
								{t("modulesPage.title")}
							</h1>

							<p className="text-xl text-enterprise-secondary max-w-2xl">
								{t("modulesPage.subtitle")}
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link to="/en/contact" className="btn-primary group">
									{t("modulesPage.getStarted")}
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>

						<div className="relative animate-fade-in-right">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-3xl transform rotate-3"></div>
							<img
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
								alt="Omniflow Modules"
								className="relative rounded-3xl shadow-enterprise-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="section-enterprise bg-white py-20">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{modules.map((module) => {
							const Icon = module.icon;
							return (
								<Link
									key={module.key}
									to={`/en/modules/${module.key}`}
									className="card-feature group cursor-pointer"
								>
									<div
										className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${module.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
									>
										<Icon className="h-8 w-8 text-white" />
									</div>
									<h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
										{t(
											`navigation.${module.key === "payment-gateway" ? "paymentGateway" : module.key}`
										)}
									</h3>
									<p className="text-enterprise-secondary leading-relaxed">
										{t(`modulesPage.modules.${module.key}`)}
									</p>
									<div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
										{t("common.learnMore")} →
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
