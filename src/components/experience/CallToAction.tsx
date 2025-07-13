
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-primary-orange to-primary-dark rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-xl mb-6 opacity-90">
          I'm always looking for new opportunities and exciting challenges
        </p>
        <Button asChild variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
          <a href="/contact">Let's Connect</a>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
