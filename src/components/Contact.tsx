import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
	const { t } = useTranslation();

	return (
		<section id="contact" className="py-16 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">
					{t("contact.title")}
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					<div className="space-y-12">
						<div>
							<h3 className="text-2xl font-bold text-slate-900 mb-8">
								{t("contact.info.title")}
							</h3>
							<div className="space-y-6">
								<div className="flex items-center space-x-5 group p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
									<div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
										<Mail className="h-6 w-6" />
									</div>
									<span className="text-lg text-slate-700">{t("contact.info.email.details")}</span>
								</div>

								<a
									href="https://api.whatsapp.com/send?phone=6282125609413"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-5 group p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 translate-x-0"
								>
									<div className="p-3 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
										<Phone className="h-6 w-6" />
									</div>
									<span className="text-lg text-slate-700">{t("contact.info.phone.details")}</span>
								</a>

								<div className="flex items-start space-x-5 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
									<div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
										<MapPin className="h-6 w-6" />
									</div>
									<div>
										<p className="font-bold text-lg text-slate-900 mb-1">{t("contact.office.name")}</p>
										<p className="text-slate-600 leading-relaxed">
											{t("contact.office.addressDetails")}
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-3xl shadow-xl border border-gray-200 overflow-hidden h-[350px]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.329!2d106.789298!3d-6.176359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f73d4c9cb%3A0x144ec1e5914e9cc3!2sAPL%20Tower%2C%20RT.3%2FRW.5%2C%20Tj.%20Duren%20Sel.%2C%20Kec.%20Grogol%20petamburan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011470!5e0!3m2!1sid!2sid!4v1640794746998!5m2!1sid!2sid"
								frameBorder="0"
								style={{ border: "0", width: "100%", height: "100%" }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Office Location"
							/>
						</div>
					</div>

					<div className="bg-white p-10 rounded-3xl shadow-enterprise border border-gray-100 relative">
						<form className="space-y-6 relative z-10">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="form-label block text-sm font-bold text-slate-700 mb-2">
										{t("contact.form.name")}
									</label>
									<input
										type="text"
										className="form-input"
										placeholder={t("contact.form.namePlaceholder")}
										required
									/>
								</div>
								<div>
									<label className="form-label block text-sm font-bold text-slate-700 mb-2">
										{t("contact.form.email")}
									</label>
									<input
										type="email"
										className="form-input"
										placeholder={t("contact.form.emailPlaceholder")}
										required
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="form-label block text-sm font-bold text-slate-700 mb-2">
										{t("contact.form.company")}
									</label>
									<input
										type="text"
										className="form-input"
										placeholder={t("contact.form.companyPlaceholder")}
									/>
								</div>
								<div>
									<label className="form-label block text-sm font-bold text-slate-700 mb-2">
										{t("contact.form.phone")}
									</label>
									<input
										type="tel"
										className="form-input"
										placeholder={t("contact.form.phonePlaceholder")}
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="form-label block text-sm font-bold text-slate-700 mb-2">
										{t("contact.form.jobTitle")}
									</label>
									<input
										type="text"
										className="form-input"
										placeholder={t("contact.form.jobTitlePlaceholder")}
									/>
								</div>
								<div>
									<label className="form-label block text-sm font-bold text-slate-700 mb-2">
										{t("contact.form.companySize")}
									</label>
									<select className="form-select">
										<option value="">{t("contact.form.selectCompanySize")}</option>
										<option value="1-10">{t("contact.form.companySizes.small")}</option>
										<option value="11-50">{t("contact.form.companySizes.medium")}</option>
										<option value="51-200">{t("contact.form.companySizes.large")}</option>
										<option value="201-1000">{t("contact.form.companySizes.enterprise")}</option>
										<option value="1000+">{t("contact.form.companySizes.mega")}</option>
									</select>
								</div>
							</div>

							<div>
								<label className="form-label block text-sm font-bold text-slate-700 mb-2">
									{t("contact.form.subject")}
								</label>
								<select className="form-select" required>
									<option value="">{t("contact.form.selectSubject")}</option>
									<option value="general">{t("contact.form.subjects.general")}</option>
									<option value="demo">{t("contact.form.subjects.demo")}</option>
									<option value="support">{t("contact.form.subjects.support")}</option>
									<option value="sales">{t("contact.form.subjects.sales")}</option>
									<option value="partnership">{t("contact.form.subjects.partnership")}</option>
									<option value="enterprise">{t("contact.form.subjects.enterprise")}</option>
									<option value="other">{t("contact.form.subjects.other")}</option>
								</select>
							</div>

							<div>
								<label className="form-label block text-sm font-bold text-slate-700 mb-2">
									{t("contact.form.message")}
								</label>
								<textarea
									rows={4}
									className="form-textarea"
									placeholder={t("contact.form.messagePlaceholder")}
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="btn-primary w-full py-4 text-lg font-bold shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all"
							>
								{t("contact.form.sendMessage")}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
