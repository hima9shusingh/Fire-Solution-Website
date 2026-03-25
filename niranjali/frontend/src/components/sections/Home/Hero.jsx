import React from "react";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
      {/* Background Image Placeholder with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-primary/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-secondary/20 z-10" />
        {/* Ambient Orange Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full z-10 pointer-events-none mix-blend-screen" />
      </div>

      <div className="container-custom relative z-20 pt-16 lg:pt-20">
        <div className="max-w-5xl space-y-8">
          <div className="inline-block px-3 py-1 border-l-2 border-primary bg-primary/10 text-primary-light font-medium text-sm tracking-widest uppercase shadow-[0_0_10px_rgba(255,107,0,0.1)]">
            Premium Fire Safety Engineering
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-light tracking-tight leading-[1.1] sm:leading-[1.1]">
            Industrial Fire Protection Systems for{" "}
            <span className="text-primary glow-text">High-Risk Facilities</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-[var(--text-muted)] max-w-3xl font-medium leading-relaxed ">
            Engineering-driven fire safety solutions designed for factories,
            warehouses, and corporate infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8 w-full sm:w-auto">
            <Link to="/request-inspection" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-10 h-14 bg-primary hover:bg-primary-light border-0 shadow-xl shadow-primary/20 rounded-sm font-bold tracking-wide"
              >
                Request Site Inspection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
