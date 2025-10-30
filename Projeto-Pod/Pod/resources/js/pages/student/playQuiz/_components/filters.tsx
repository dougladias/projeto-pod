import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface FiltersProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
    selectedStatus: string;
    onStatusChange: (value: string) => void;
    percentage?: number;
}

export function Filters({
    searchQuery,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    selectedStatus,
    onStatusChange,
    percentage,
}: FiltersProps) {
    return (
        <Card className="p-6 border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <Filter className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-900">Filtros</h3>
                        <p className="text-sm text-gray-600">Sua evolução nos quizzes</p>
                    </div>
                </div>
                {percentage !== undefined && (
                    <Badge variant="secondary" className="bg-blue-600 text-white px-3 py-1">
                        {percentage}% Completo
                    </Badge>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search Input */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Buscar Quizzes..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-10 border-gray-300"
                    />
                </div>

                {/* Category Select */}
                <Select value={selectedCategory} onValueChange={onCategoryChange}>
                    <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Todas as categorias" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas as categorias</SelectItem>
                        <SelectItem value="componentes">Componentes</SelectItem>
                        <SelectItem value="saude">Saúde</SelectItem>
                    </SelectContent>
                </Select>

                {/* Status Select */}
                <Select value={selectedStatus} onValueChange={onStatusChange}>
                    <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="completed">Completos</SelectItem>
                        <SelectItem value="incomplete">Incompletos</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </Card>
    );
}
