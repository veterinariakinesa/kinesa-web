import React from 'react';
import { useConfig } from '../../context/ConfigContext';
import { Settings, Save, Trash2, Edit3, X } from 'lucide-react';

const AdminToolbar: React.FC = () => {
    const { editMode, setEditMode, resetConfig } = useConfig();

    if (!editMode) {
        return (
            <button
                onClick={() => setEditMode(true)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all z-50 flex items-center gap-2 group"
                title="Activar Modo Edición"
            >
                <Edit3 size={24} />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
                    Editar Página
                </span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-2 z-50 flex items-center gap-2 animate-in slide-in-from-bottom-4 transition-all">
            <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold flex items-center gap-2">
                <Settings size={16} />
                MODO EDICIÓN ACTIVO
            </div>

            <div className="h-8 w-px bg-gray-200 mx-1" />

            <button
                onClick={() => {
                    // Force blur for any active contentEditable to trigger saves
                    (document.activeElement as HTMLElement)?.blur();
                    setTimeout(() => {
                        alert('Los cambios han sido guardados automáticamente.');
                    }, 100);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm font-semibold"
            >
                <Save size={18} />
                Guardar
            </button>

            <button
                onClick={resetConfig}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors text-sm font-semibold"
            >
                <Trash2 size={18} />
                Restablecer
            </button>

            <button
                onClick={() => setEditMode(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm font-semibold"
            >
                <X size={18} />
                Cerrar
            </button>
        </div>
    );
};

export default AdminToolbar;
