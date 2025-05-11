export default function TestComponent() {
    return (
      <div className="p-6 bg-teal-500/20 border border-teal-500/40 rounded-xl">
        <h3 className="text-xl font-bold text-teal-400 mb-2">
          Componente Importato Correttamente!
        </h3>
        <p className="text-white/80">
          Se vedi questo componente, l'import alias (@/) funziona correttamente.
          Questo significa che la configurazione di base è completata con successo!
        </p>
      </div>
    );
  }