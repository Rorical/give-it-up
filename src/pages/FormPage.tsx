import { useState, FormEvent } from 'react';
import Footer from '../components/Footer';

function FormPage() {
  const [formData, setFormData] = useState({
    giveItUp1: '',
    giveItUp2: '',
    giveItUp3: '',
    giveItUp4: '',
    giveItUp5: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      giveItUp1: '',
      giveItUp2: '',
      giveItUp3: '',
      giveItUp4: '',
      giveItUp5: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-4 tracking-wider">
          GIVE IT UP FORM
        </h1>
        <p className="text-center text-white/70 mb-12 text-lg">
          Fill out the form and give it all up
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="giveItUp1" className="block text-sm font-medium tracking-wide">
              GIVE IT UP
            </label>
            <input
              type="text"
              id="giveItUp1"
              value={formData.giveItUp1}
              onChange={(e) => handleChange('giveItUp1', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/40"
              placeholder="Give it up..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="giveItUp2" className="block text-sm font-medium tracking-wide">
              GIVE IT UP
            </label>
            <input
              type="email"
              id="giveItUp2"
              value={formData.giveItUp2}
              onChange={(e) => handleChange('giveItUp2', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/40"
              placeholder="give@itup.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="giveItUp3" className="block text-sm font-medium tracking-wide">
              GIVE IT UP
            </label>
            <textarea
              id="giveItUp3"
              value={formData.giveItUp3}
              onChange={(e) => handleChange('giveItUp3', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/40 resize-none"
              placeholder="Give it up in detail..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="giveItUp4" className="block text-sm font-medium tracking-wide">
              GIVE IT UP
            </label>
            <select
              id="giveItUp4"
              value={formData.giveItUp4}
              onChange={(e) => handleChange('giveItUp4', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
            >
              <option value="">Select give it up</option>
              <option value="give1">Give it up 1</option>
              <option value="give2">Give it up 2</option>
              <option value="give3">Give it up 3</option>
              <option value="give4">Give it up 4</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="giveItUp5" className="block text-sm font-medium tracking-wide">
              GIVE IT UP
            </label>
            <input
              type="date"
              id="giveItUp5"
              value={formData.giveItUp5}
              onChange={(e) => handleChange('giveItUp5', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-white text-black py-4 px-8 rounded-lg font-bold text-lg tracking-wider hover:bg-white/90 transition-all transform hover:scale-105"
            >
              GIVE IT UP
            </button>
            <button
              type="button"
              onClick={() => setFormData({
                giveItUp1: '',
                giveItUp2: '',
                giveItUp3: '',
                giveItUp4: '',
                giveItUp5: '',
              })}
              className="flex-1 bg-white/10 text-white py-4 px-8 rounded-lg font-bold text-lg tracking-wider border border-white/30 hover:bg-white/20 transition-all"
            >
              CLEAR IT UP
            </button>
          </div>
        </form>

        <div className="mt-12 mb-20 p-6 bg-white/5 border border-white/20 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 tracking-wider">GIVE IT UP STATUS</h2>
          <div className="space-y-2 text-white/70">
            <p>Total give it ups: 0</p>
            <p>Last give it up: Never</p>
            <p>Next give it up: Soon</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FormPage;
