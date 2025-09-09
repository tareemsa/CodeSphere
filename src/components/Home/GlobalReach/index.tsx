"use client";
import { GlobalReachData } from "./data";

const GlobalReach = () => {
    return (
        <section className="bg-gray-900 py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {GlobalReachData.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center p-8 bg-gray-800/50 rounded-2xl border border-white/10 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="text-primary text-4xl mb-4">
                                    <Icon />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/70">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
