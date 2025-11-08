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
import { Calendar22 } from '../date-picker'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '../ui/select'

const studentSchema = z
    .object({
        id: z.number(),
        fullname: z
            .string()
            .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
        email: z.email({ message: 'Insira um e-mail válido.' }).optional(),
        sex: z.enum(['', 'Masculino', 'Feminino']),
        class: z.enum([
            '',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira'
        ]),
        shift: z.enum(['', 'Manhã', 'Tarde']),
        module: z.enum(['', 'Básico', 'Especifico']),
        workload: z.string(),
        gurdiansContact: z.string().optional(),
        gurdianName: z.string().optional(),
        enrollmentInitialDate: z.date().optional(),
        enrollmentEndDate: z.date().optional(),
        birthDate: z.date().optional(),
        phone: z
            .string()
            .min(10, {
                message: 'O telefone deve ter no mínimo 10 caracteres.'
            }),
        arch: z.enum(['', 'Administrativo', 'Tecnologia']),
        instructor: z.enum(['', 'instrutor1', 'intrutor2']),
        employer: z.enum(['', 'empresa1', 'empresa2'])
    })
    .refine(
        (data) =>
            !data.enrollmentInitialDate ||
            !data.enrollmentEndDate ||
            data.enrollmentInitialDate <= data.enrollmentEndDate
    )

export function StudentForm() {
    const form = useForm<z.infer<typeof studentSchema>>({
        resolver: zodResolver(studentSchema),
        defaultValues: {
            id: 0,
            email: '',
            fullname: '',
            phone: '',
            birthDate: undefined,
            sex: '',
            gurdiansContact: '',
            gurdianName: '',
            employer: '',
            enrollmentEndDate: undefined,
            enrollmentInitialDate: undefined,
            workload: '',
            instructor: '',
            arch: '',
            module: '',
            shift: '',
            class: ''
        }
    })

    async function onSubmit(data: z.infer<typeof studentSchema>) {
        data.id = Math.floor(Math.random() * 100000 - 0) + 0

        try {
            console.log('Form Data:', data)
            toast.success('Aluno cadastrado com sucesso!')
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Erro ao cadastrar aluno. Tente novamente.')
        }
    }

    return (
        <div className="flex flex-col min-h-[50vh] h-screen w-full items-center justify-center px-4">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Cadastrar Aluno</CardTitle>
                    <CardDescription>
                        Preencha o formulário abaixo para cadastrar um novo
                        aluno.
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
                                    name="fullname"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nome Completo"
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
                                <FormField
                                    control={form.control}
                                    name="birthDate"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>
                                                Data de Nascimento
                                            </FormLabel>
                                            <FormControl>
                                                <Calendar22
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="sex"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Sexo</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    {...field}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Sexo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {studentSchema.shape.sex.options
                                                            .slice(1)
                                                            .map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <span className="flex gap-1">
                                <FormField
                                    control={form.control}
                                    name="gurdianName"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>
                                                Nome do Responsável
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nome do Responsável"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="gurdiansContact"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>
                                                Contato do Responsável
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Contato do Responsável"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <FormField
                                control={form.control}
                                name="employer"
                                render={({ field }) => (
                                    <FormItem className="basis-full">
                                        <FormLabel>Empresa</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                {...field}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Empresa" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {studentSchema.shape.employer.options
                                                        .slice(1)
                                                        .map((option) => (
                                                            <SelectItem
                                                                key={option}
                                                                value={option}
                                                            >
                                                                {option}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <span className="flex gap-1">
                                <FormField
                                    control={form.control}
                                    name="workload"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>
                                                Carga Horária (horas)
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Carga Horária"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="enrollmentInitialDate"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>
                                                Inicio do contrato
                                            </FormLabel>
                                            <FormControl>
                                                <Calendar22
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="enrollmentEndDate"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>
                                                Termino do contrato
                                            </FormLabel>
                                            <FormControl>
                                                <Calendar22
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <span className="flex gap-1">
                                <FormField
                                    control={form.control}
                                    name="instructor"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Instrutor</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    {...field}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Instrutor" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {studentSchema.shape.instructor.options
                                                            .slice(1)
                                                            .map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="arch"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Arco</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    {...field}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Arco" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {studentSchema.shape.arch.options
                                                            .slice(1)
                                                            .map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="module"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Módulo</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    {...field}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Módulo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {studentSchema.shape.module.options
                                                            .slice(1)
                                                            .map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <span className="flex gap-1">
                                <FormField
                                    control={form.control}
                                    name="class"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Turma</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    {...field}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Turma" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {studentSchema.shape.class.options
                                                            .slice(1)
                                                            .map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="shift"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Turno</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    {...field}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Turno" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {studentSchema.shape.shift.options
                                                            .slice(1)
                                                            .map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <Button type="submit">Cadastrar</Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => form.reset()}
                            >
                                Limpar
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
