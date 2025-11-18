import z from 'zod'

export const employerSchema = z.object({
    id: z.number(),
    company: z
        .string()
        .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
    email: z.email({ message: 'Insira um e-mail válido.' }).optional(),
    phone: z
        .string()
        .min(10, { message: 'O telefone deve ter no mínimo 10 caracteres.' }),
    address: z.string().optional(),
    responsible: z.string().optional()
})

export type Employer = z.infer<typeof employerSchema>
