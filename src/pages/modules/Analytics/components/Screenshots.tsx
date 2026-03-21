import { useTranslation } from "react-i18next";
import { LineChart, BarChart2, PieChart } from "lucide-react";

export default function Screenshots() {
    const { t } = useTranslation();

    return (
        <section className="section-enterprise bg-slate-50 overflow-hidden py-20">
            <div className="container-enterprise">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-[2.5rem] transform -rotate-3 blur-sm"></div>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                            alt={t("analytics.screenshots.alt", "Analytics Dashboard Interface with integration charts")}
                            className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/50"
                            loading="lazy"
                        />
                        {/* Interactive UI element floating */}
                        <div className="absolute top-1/2 -right-6 lg:-right-12 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-gray-100 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-emerald-100 rounded-lg">
                                    <LineChart className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">BCA Inflow</p>
                                    <p className="text-lg font-bold text-gray-900">+ Rp 45.2M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8 pl-0 lg:pl-10">
                        <h2 className="text-3xl lg:text-4xl font-bold text-enterprise-primary">
                            {t("analytics.screenshots.title", "Visualize Every Integration")}
                        </h2>
                        <p className="text-xl text-enterprise-secondary">
                            {t("analytics.screenshots.subtitle", "Your payment gateways and POS channels, rendered in simple, beautiful charts.")}
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                    <BarChart2 className="h-6 w-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                        {t("analytics.screenshots.f1.title", "OrderOnline Conversions")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t("analytics.screenshots.f1.desc", "See exactly which funnels lead to finalized sales.")}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                    <PieChart className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                        {t("analytics.screenshots.f2.title", "Majoo & Moka Distribution")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t("analytics.screenshots.f2.desc", "Break down revenue per outlet to pinpoint your top-performing sites.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
