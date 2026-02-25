import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as allConfigs from '../config';

// Create a plain object from the module exports to avoid namespace issues
const defaultConfig = {
    SITE_CONFIG: allConfigs.SITE_CONFIG,
    COLORS: allConfigs.COLORS,
    CONTACT_INFO: allConfigs.CONTACT_INFO,
    HERO_CONFIG: allConfigs.HERO_CONFIG,
    SERVICES_CONFIG: allConfigs.SERVICES_CONFIG,
    ABOUT_CONFIG: allConfigs.ABOUT_CONFIG,
    TESTIMONIALS_CONFIG: allConfigs.TESTIMONIALS_CONFIG,
    CONTACT_CONFIG: allConfigs.CONTACT_CONFIG,
    FOOTER_CONFIG: allConfigs.FOOTER_CONFIG,
    NAVIGATION_CONFIG: allConfigs.NAVIGATION_CONFIG,
};

export type Config = typeof defaultConfig;

interface ConfigContextType {
    config: Config;
    updateConfig: (newConfig: Partial<Config>) => void;
    editMode: boolean;
    setEditMode: (mode: boolean) => void;
    resetConfig: () => void;
    selectAndUploadImage: () => Promise<string | null>;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [config, setConfig] = useState<Config>(defaultConfig);
    const [editMode, setEditMode] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('kinesa_config');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Deep merge or at least top-level section merge
                setConfig(prev => ({ ...prev, ...parsed }));
            } catch (e) {
                console.error('Error loading config', e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to localStorage whenever config changes (after initial load)
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('kinesa_config', JSON.stringify(config));
        }
    }, [config, isLoaded]);

    const updateConfig = useCallback((newConfig: Partial<Config>) => {
        setConfig(prev => ({ ...prev, ...newConfig }));
    }, []);

    const resetConfig = useCallback(() => {
        if (confirm('¿Estás seguro de que quieres restablecer todos los cambios? Esta acción no se puede deshacer.')) {
            setConfig(defaultConfig);
            localStorage.removeItem('kinesa_config');
            window.location.reload();
        }
    }, []);

    const selectAndUploadImage = useCallback((): Promise<string | null> => {
        return new Promise((resolve) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';

            input.onchange = (e: any) => {
                const file = e.target.files?.[0];
                if (!file) {
                    resolve(null);
                    return;
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64 = event.target?.result as string;
                    resolve(base64);
                };
                reader.onerror = () => {
                    alert('Error al leer el archivo.');
                    resolve(null);
                };
                reader.readAsDataURL(file);
            };

            input.oncancel = () => {
                resolve(null);
            };

            input.click();
        });
    }, []);

    return (
        <ConfigContext.Provider value={{ config, updateConfig, editMode, setEditMode, resetConfig, selectAndUploadImage }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (context === undefined) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
