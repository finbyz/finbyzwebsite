import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Clock, Rocket, Star, Zap, Bell, ArrowRight, Mail, Calendar, Users, Target, TrendingUp, Lightbulb } from "lucide-react";
import Link from "next/link";
import styles from "./coming-soon.module.css";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={styles.heroContainer}>
              {/* Main Icon */}
              <div className={styles.mainIcon}>
                <Rocket className={styles.rocketIcon} />
              </div>
              
              {/* Main Message */}
              <div className={styles.mainMessage}>
                <h1 className={styles.mainTitle}>
                  Something Amazing is Coming Soon
                </h1>
                <p className={styles.mainDescription}>
                  We're working hard to bring you the next generation of features and solutions. 
                  Stay tuned for updates and be the first to know when we launch.
                </p>
              </div>

              {/* Progress Bar */}
              <div className={styles.progressSection}>
                <div className={styles.progressInfo}>
                  <span className={styles.progressText}>Development Progress</span>
                  <span className={styles.progressPercentage}>75%</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <Button asChild size="lg" className={styles.primaryButton}>
                  <Link href="/contact" className="flex items-center gap-2">
                    <Bell className={styles.iconLarge} />
                    Get Notified
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className={styles.secondaryButton}>
                  <Link href="/" className="flex items-center gap-2">
                    <ArrowRight className={styles.iconLarge} />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        
        
        {/* Timeline Section */}
              </main>
      <Footer />
    </div>
  );
}
