import z from 'zod'

export const studentSchema = z
    .object({
        id: z.string(),
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
        shift: z.enum(['', 'Manhã', 'Tarde', 'Noite']),
        module: z.enum(['', 'Básico', 'Específico', 'Imersão']),
        workload: z.string(),
        gurdiansContact: z.string().optional(),
        gurdianName: z.string().optional(),
        enrollmentInitialDate: z.date().optional(),
        enrollmentEndDate: z.date().optional(),
        birthDate: z.date().optional(),
        phone: z.string().min(10, {
            message: 'O telefone deve ter no mínimo 10 caracteres.'
        }),
        arch: z.string(),
        instructor: z.string(),
        employer: z.string()
    })
    .refine(
        (data) =>
            !data.enrollmentInitialDate ||
            !data.enrollmentEndDate ||
            data.enrollmentInitialDate <= data.enrollmentEndDate
    )

export type Student = z.infer<typeof studentSchema>
