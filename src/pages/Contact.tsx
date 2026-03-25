import {
	AlertCircle,
	Award,
	Building2,
	CheckCircle,
	Clock,
	Globe,
	Headphones,
	Mail,
	MapPin,
	Phone,
	Send,
	Shield,
	Users,
} from "lucide-react";
import type React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import StructuredData from "../components/StructuredData";

export default function ContactPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		phone: "",
		jobTitle: "",
		companySize: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({
				name: "",
				email: "",
				company: "",
				phone: "",
				jobTitle: "",
				companySize: "",
				subject: "",
				message: "",
			});

			// Reset success message after 5 seconds
			setTimeout(() => setSubmitStatus("idle"), 5000);
		}, 2000);
	};

	const contactInfo = [
		{
			icon: Mail,
			title: t("contact.info.email.title"),
			details: t("contact.info.email.details"),
			description: t("contact.info.email.description"),
			color: "from-blue-500 to-blue-600",
		},
		{
			icon: Phone,
			title: t("contact.info.phone.title"),
			details: t("contact.info.phone.details"),
			description: t("contact.info.phone.description"),
			color: "from-emerald-500 to-emerald-600",
		},
		{
			icon: MapPin,
			title: t("contact.info.address.title"),
			details: t("contact.info.address.details"),
			description: t("contact.info.address.description"),
			color: "from-purple-500 to-purple-600",
		},
		{
			icon: Headphones,
			title: t("contact.info.support.title"),
			details: t("contact.info.support.details"),
			description: t("contact.info.support.description"),
			color: "from-orange-500 to-orange-600",
		},
	];

	const subjects = [
		t("contact.form.subjects.general"),
		t("contact.form.subjects.demo"),
		t("contact.form.subjects.support"),
		t("contact.form.subjects.sales"),
		t("contact.form.subjects.partnership"),
		t("contact.form.subjects.enterprise"),
		t("contact.form.subjects.other"),
	];

	const companySizes = [
		t("contact.form.companySizes.small"),
		t("contact.form.companySizes.medium"),
		t("contact.form.companySizes.large"),
		t("contact.form.companySizes.enterprise"),
		t("contact.form.companySizes.mega"),
	];

	const features = [
		{ icon: Building2, text: t("contact.features.security") },
		{ icon: Users, text: t("contact.features.customers") },
		{ icon: Award, text: t("contact.features.certified") },
		{ icon: Shield, text: t("contact.features.uptime") },
		{ icon: Globe, text: t("contact.features.support") },
		{ icon: CheckCircle, text: t("contact.features.roi") },
	];

	return (
		<>
			<SEOHead
				title={t("contact.title")}
				description={t("contact.subtitle")}
				keywords="Contact Omniflow, ERP Support, Business Software Contact, Enterprise Solutions Indonesia, HRIS Support, Hubungi Omniflow"
				type="website"
			/>
			<StructuredData
				type="Organization"
				data={{
					contactPoint: [
						{
							"@type": "ContactPoint",
							telephone: "+62 821 2560 9413",
							contactType: "customer service",
							email: "contact@omniflow.id",
							availableLanguage: ["English", "Indonesian", "Chinese"],
							hoursAvailable: "Mo-Fr 08:00-18:00",
						},
					],
				}}
			/>

			<div className="min-h-screen bg-white">
				<section className="section-hero relative overflow-hidden">
					{/* Background Decoration */}
					<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
						<div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-orb-float"></div>
						<div
							className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-orb-float"
							style={{ animationDelay: "-8s" }}
						></div>
					</div>

					<div className="container-enterprise relative z-10">
						<div className="text-center max-w-4xl mx-auto">
							<div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-bold shadow-sm border border-blue-200 mb-8">
								<CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
								{t("contact.badge")}
							</div>
							<h1 className="text-enterprise-primary mb-8 leading-tight">
								{t("contact.title")}
							</h1>
							<p className="text-xl text-enterprise-secondary mb-16 max-w-2xl mx-auto leading-relaxed">
								{t("contact.subtitle")}
							</p>

							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
								{features.map((feature, index) => (
									<div
										key={index}
										className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
									>
										<div className="p-3 bg-blue-50 rounded-xl mb-4 text-blue-600">
											<feature.icon className="h-6 w-6" />
										</div>
										<span className="text-sm font-bold text-center text-slate-800">
											{feature.text}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 bg-white">
					<div className="container-enterprise">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
							{contactInfo.map((info, index) => (
								<div
									key={index}
									className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden text-center"
								>
									<div
										className={`absolute -right-6 -top-6 w-16 h-16 bg-gradient-to-br ${info.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-full`}
									></div>

									<div
										className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}
									>
										<info.icon className="h-7 w-7 text-white" />
									</div>
									<h3 className="text-xl font-bold text-slate-900 mb-2">
										{info.title}
									</h3>
									<p className="text-blue-600 font-bold mb-3">{info.details}</p>
									<p className="text-slate-500 text-sm leading-relaxed">
										{info.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Form & Additional Info */}
				<section className="section-enterprise gradient-secondary">
					<div className="container-enterprise">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
							{/* Contact Form */}
							<div className="lg:col-span-2">
								<div className="card-enterprise p-10">
									<div className="mb-8">
										<h2 className="text-3xl font-bold text-enterprise-primary mb-4">
											{t("contact.form.title")}
										</h2>
										<p className="text-enterprise-secondary">
											{t("contact.form.subtitle")}
										</p>
									</div>

									{submitStatus === "success" && (
										<div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center">
											<CheckCircle className="h-6 w-6 text-green-600 mr-4" />
											<div>
												<p className="font-semibold text-green-800">
													{t("contact.form.success.title")}
												</p>
												<p className="text-green-700">
													{t("contact.form.success.message")}
												</p>
											</div>
										</div>
									)}

									{submitStatus === "error" && (
										<div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center">
											<AlertCircle className="h-6 w-6 text-red-600 mr-4" />
											<div>
												<p className="font-semibold text-red-800">
													{t("contact.form.error.title")}
												</p>
												<p className="text-red-700">
													{t("contact.form.error.message")}
												</p>
											</div>
										</div>
									)}

									<form
										id="contact-form"
										onSubmit={handleSubmit}
										className="space-y-6"
									>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<label className="block text-sm font-semibold text-enterprise-primary mb-3">
													{t("contact.form.name")} {t("contact.form.required")}
												</label>
												<input
													type="text"
													name="name"
													value={formData.name}
													onChange={handleInputChange}
													required
													className="form-input"
													placeholder={t("contact.form.namePlaceholder")}
												/>
											</div>
											<div>
												<label className="block text-sm font-semibold text-enterprise-primary mb-3">
													{t("contact.form.email")} {t("contact.form.required")}
												</label>
												<input
													type="email"
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													required
													className="form-input"
													placeholder={t("contact.form.emailPlaceholder")}
												/>
											</div>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<label className="block text-sm font-semibold text-enterprise-primary mb-3">
													{t("contact.form.company")}
												</label>
												<input
													type="text"
													name="company"
													value={formData.company}
													onChange={handleInputChange}
													className="form-input"
													placeholder={t("contact.form.companyPlaceholder")}
												/>
											</div>
											<div>
												<label className="block text-sm font-semibold text-enterprise-primary mb-3">
													{t("contact.form.phone")}
												</label>
												<input
													type="tel"
													name="phone"
													value={formData.phone}
													onChange={handleInputChange}
													className="form-input"
													placeholder={t("contact.form.phonePlaceholder")}
												/>
											</div>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<label className="block text-sm font-semibold text-enterprise-primary mb-3">
													{t("contact.form.jobTitle")}
												</label>
												<input
													type="text"
													name="jobTitle"
													value={formData.jobTitle}
													onChange={handleInputChange}
													className="form-input"
													placeholder={t("contact.form.jobTitlePlaceholder")}
												/>
											</div>
											<div>
												<label className="block text-sm font-semibold text-enterprise-primary mb-3">
													{t("contact.form.companySize")}
												</label>
												<select
													name="companySize"
													value={formData.companySize}
													onChange={handleInputChange}
													className="form-select"
												>
													<option value="">
														{t("contact.form.selectCompanySize")}
													</option>
													{companySizes.map((size) => (
														<option key={size} value={size}>
															{size}
														</option>
													))}
												</select>
											</div>
										</div>

										<div>
											<label className="block text-sm font-semibold text-enterprise-primary mb-3">
												{t("contact.form.subject")} {t("contact.form.required")}
											</label>
											<select
												name="subject"
												value={formData.subject}
												onChange={handleInputChange}
												required
												className="form-select"
											>
												<option value="">
													{t("contact.form.selectSubject")}
												</option>
												{subjects.map((subject) => (
													<option key={subject} value={subject}>
														{subject}
													</option>
												))}
											</select>
										</div>

										<div>
											<label className="block text-sm font-semibold text-enterprise-primary mb-3">
												{t("contact.form.message")} {t("contact.form.required")}
											</label>
											<textarea
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												required
												rows={6}
												className="form-textarea"
												placeholder={t("contact.form.messagePlaceholder")}
											></textarea>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{isSubmitting ? (
												<>
													<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
													{t("contact.form.sending")}
												</>
											) : (
												<>
													{t("contact.form.sendMessage")}
													<Send className="ml-3 h-5 w-5" />
												</>
											)}
										</button>
									</form>
								</div>
							</div>

							{/* Sidebar */}
							<div className="space-y-8">
								{/* Office Info */}
								<div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
									<h3 className="text-xl font-bold text-slate-900 mb-6">
										{t("contact.office.title")}
									</h3>
									<div className="aspect-video relative rounded-2xl overflow-hidden mb-8 border border-gray-100 group shadow-lg">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.329!2d106.789298!3d-6.176359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f73d4c9cb%3A0x144ec1e5914e9cc3!2sAPL%20Tower%2C%20RT.3%2FRW.5%2C%20Tj.%20Duren%20Sel.%2C%20Kec.%20Grogol%20petamburan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011470!5e0!3m2!1sid!2sid!4v1640794746998!5m2!1sid!2sid"
											frameBorder="0"
											style={{ border: "0", width: "100%", height: "100%" }}
											allowFullScreen
											loading="lazy"
											title="Office Location Mapping"
										/>
									</div>
									<div className="space-y-6">
										<div className="flex gap-4">
											<div className="p-2 bg-blue-50 text-blue-600 h-fit rounded-lg">
												<MapPin className="h-5 w-5" />
											</div>
											<div>
												<span className="font-bold text-slate-900 block mb-1">
													{t("contact.office.address")}
												</span>
												<p className="text-slate-600 text-sm leading-relaxed">
													{t("contact.office.addressDetails")}
												</p>
											</div>
										</div>
										<div className="flex gap-4">
											<div className="p-2 bg-emerald-50 text-emerald-600 h-fit rounded-lg">
												<Clock className="h-5 w-5" />
											</div>
											<div>
												<span className="font-bold text-slate-900 block mb-1">
													{t("contact.office.hours")}
												</span>
												<p className="text-slate-600 text-sm">
													{t("contact.office.hoursDetails")}
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Quick Stats */}
								<div className="card-enterprise p-8">
									<h3 className="text-xl font-bold text-enterprise-primary mb-6">
										{t("contact.whyChoose.title")}
									</h3>
									<div className="space-y-6">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
												<Clock className="h-6 w-6 text-blue-600" />
											</div>
											<div>
												<div className="font-semibold text-enterprise-primary">
													2-4 {t("contact.whyChoose.hours")}
												</div>
												<div className="text-sm text-enterprise-muted">
													{t("contact.whyChoose.responseTime")}
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
												<Users className="h-6 w-6 text-green-600" />
											</div>
											<div>
												<div className="font-semibold text-enterprise-primary">
													10,000+
												</div>
												<div className="text-sm text-enterprise-muted">
													{t("contact.whyChoose.customers")}
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
												<Award className="h-6 w-6 text-purple-600" />
											</div>
											<div>
												<div className="font-semibold text-enterprise-primary">
													99.9%
												</div>
												<div className="text-sm text-enterprise-muted">
													{t("contact.whyChoose.uptime")}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="section-enterprise gradient-dark text-white">
					<div className="container-enterprise text-center">
						<h2 className="text-white mb-6">{t("contact.cta.title")}</h2>
						<p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl">
							{t("contact.cta.subtitle")}
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<button className="btn-cta-light">
								{t("contact.cta.scheduleDemo")}
							</button>
							<button className="btn-cta-outline">
								{t("contact.cta.viewPricing")}
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
