'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { toast } from 'sonner'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '../ui/card'
import { Button } from '../ui/button'
import { employerSchema } from '@/schemas/employer.schema'
import { useEmployerStore } from '@/store/useEmployertStore-plugin'

export function EmployerForm() {
    const addEmployer = useEmployerStore((state) => state.addEmployer)
    const form = useForm<z.infer<typeof employerSchema>>({
        resolver: zodResolver(employerSchema),
        defaultValues: {
            id: 0,
            company: '',
            email: '',
            phone: '',
            address: '',
            responsible: ''
        }
    })

    async function onSubmit(data: z.infer<typeof employerSchema>) {
        data.id = Math.floor(Math.random() * 100000 - 0) + 0

        try {
            console.log('Form Data:', data)
            addEmployer(data)
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Erro ao cadastrar Empresa. Tente novamente.')
        }
    }

    return (
        <Card className="w-fit">
            <CardHeader>
                <CardTitle>Cadastrar Empresa</CardTitle>
                <CardDescription>
                    Preencha o formulário abaixo para cadastrar uma nova
                    empresa.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 min-w-xl max-w-2xl"
                    >
                        <span className="flex gap-1 flex-row">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem className="basis-full">
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nome"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="basis-full">
                                        <FormLabel>E-mail</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="E-mail"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </span>
                        <span className="flex gap-1">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="basis-full">
                                        <FormLabel>Telefone</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Telefone"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </span>
                        <span className="flex gap-1">
                            <FormField
                                control={form.control}
                                name="responsible"
                                render={({ field }) => (
                                    <FormItem className="basis-full">
                                        <FormLabel>Responsável</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Responsável"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="basis-full">
                                        <FormLabel>Endereço</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Endereço"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </span>
                        <Button type="submit">Cadastrar</Button>
                        <Button variant="outline" onClick={() => form.reset()}>
                            Limpar
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
